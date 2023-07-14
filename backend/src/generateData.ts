import fs from 'fs';
import { resolve } from 'path';

import { faker } from '@faker-js/faker';
import { times, sample, sampleSize, random, shuffle } from 'lodash';


const FEATURES_COUNT = 3;
const PRODUCTS_COUNT = 200;
const categoriesList = ['Vegetables', 'Fruits', 'Meat', 'Bakery', 'Milk products', 'Ready-made food'];
const countriesList = ['Russia', 'USA', 'Egypt', 'Turkey', 'Azerbaijan', 'China', 'Cuba', 'Greece', 'India', 'Mexico'];

export interface Image {
    id: number;
    name: string;
    url: string;
}


export async function generateData() {
    const images = await generateImages();
    await generateFeatures(images);
    const countries = await generateCountries();
    const categories = await generateCategories();
    await generateProducts(images, categories, countries);
    await generateAbout(images);
    await generateHero(images);
}

async function generateImages() {
    const prevImages: Image[] = await strapi.plugins.upload.services.upload.findMany({});
    if (prevImages.length > 0) return prevImages;

    await fs.readdirSync(resolve(process.cwd(), 'public/uploads')).forEach((imageName) => {
        fs.rmSync(resolve(resolve(process.cwd(), 'public/uploads', imageName)));
    });
    const imageNames = await fs.readdirSync(resolve(process.cwd(), 'public/images'));

    return Promise.all(imageNames.map(async (imageName) => {
        const filePath = resolve(process.cwd(), 'public/images/', imageName);
        const stats = fs.statSync(filePath);
        const type = `image/${imageName.split('.').pop().toLowerCase()}`;
        const [image] = await strapi.plugins.upload.services.upload.upload({
            data: {},
            files: {
                path: filePath,
                name: imageName,
                type,
                size: stats.size,
            },
        });
        return image;
    }));
}

async function generateHero(images: Image[]) {
    const hero = await strapi.db.query('api::hero.hero').findMany({});
    if (hero.length > 0) return;
    await strapi.db.query('api::hero.hero').create({
        data: {
            title: '100% natural',
            text: faker.lorem.paragraph(2),
            image: images.find((img) => img.name.includes('hero')),
        },
    });
}


async function generateAbout(images: Image[]) {
    const about = await strapi.db.query('api::about.about').findMany({});
    if (about.length > 0) return;
    await strapi.db.query('api::about.about').create({
        data: {
            body: faker.lorem.paragraph(3),
            image: images.find((img) => img.name.startsWith('placeholder_2')),
        },
    });
}

async function generateFeatures(images: Image[]) {
    const features = await strapi.db.query('api::feature.feature').findMany({});
    if (features.length > 0) return;
    await Promise.all(times(FEATURES_COUNT, (i) => strapi.db.query('api::feature.feature').create({
        data: {
            title: faker.company.catchPhrase(),
            text: faker.lorem.paragraph(),
            image: images.find((img) => img.name.startsWith(`feature_${i + 1}`)) || images[0],
        },
    })));
}

async function generateCountries() {
    const prevCountries = await strapi.db.query('api::country.country').findMany({});
    if (prevCountries.length > 0) return prevCountries;
    return Promise.all(countriesList.map((country) => strapi.db.query('api::country.country').create({
        data: {
            name: country,
        },
    })));
}

async function generateCategories() {
    const prevCategories = await strapi.db.query('api::category.category').findMany({});
    if (prevCategories.length > 0) return prevCategories;
    return Promise.all(categoriesList.map((category) => strapi.db.query('api::category.category').create({
        data: {
            name: category,
        },
    })));
}

async function generateProducts(images: Image[], categories: { id: number; }[], countries: { id: number; }[]) {
    await strapi.db.query('api::product.product').deleteMany({});
    const prevProducts = await strapi.db.query('api::product.product').findMany({});
    if (prevProducts.length > 0) return prevProducts;

    const date = faker.date.between({ from: '2002-01-01T10:30:00.354Z', to: '2023-01-29T18:38:51.354Z' });
    const units = ['kilogram', 'gram', 'liter', 'mililiter', 'piece', 'ton'];
    return Promise.all(times(PRODUCTS_COUNT, () => strapi.db.query('api::product.product').create({
        data: {
            name: faker.commerce.productName(),
            description: faker.lorem.paragraphs(3),
            price: faker.commerce.price({ min: 100, max: 1000, dec: 2 }),
            unit: sample(units),
            discount: Math.random() > 0.3 ? random(10, 60, false) : 0,
            createdAt: date,
            updatedAt: date,
            publishedAt: date,
            category: sample(categories).id,
            country: sample(countries).id,
            images: shuffle(sampleSize(images.filter((img) => img.name.startsWith('placeholder')), 3)),
        },
    })));
}
