
import Catalog from './Catalog';
import ProductsList from './ProductsList';
import SearchProducts from './SearchProducts';
import SortProducts from './SortProducts';

import Pagination from '~/components/common/Pagination';
import { getProductsPreviews } from '~/requests';


const ProductsBlock = async ({ searchParams }: { searchParams: Record<string, string|undefined> }) => {
    const { products, pagination } = await getProductsPreviews(searchParams);

    return (
        <div className="container my-4">
            <div className="d-block d-xl-none">
                <button
                    className="btn btn-primary mb-2"
                    data-bs-target="#catalog-offcanvas"
                    data-bs-toggle="offcanvas"
                    type="button"
                >
                    OPEN CATALOG
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    id="catalog-offcanvas"
                    tabIndex={-1}
                >
                    <div className="offcanvas-header">
                        <button
                            aria-label="Close"
                            className="btn-close text-reset ms-auto"
                            data-bs-dismiss="offcanvas"
                            type="button"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <Catalog />
                    </div>
                </div>
            </div>

            <div className="mb-4 mx-1 mx-md-0">
                <SearchProducts />
            </div>

            <div className="row">
                <div className="col-12 col-xl-2 d-none d-xl-block">
                    <Catalog />
                </div>
                <div className="col-12 col-xl-10 position-relative">
                    <div className="breadcrumb d-flex justify-content-end me-3">
                        <SortProducts className="breadcrumb-item" value="price">
                            Sort by Price
                        </SortProducts>
                        <SortProducts className="breadcrumb-item" value="discount">
                            Sort by Discount
                        </SortProducts>
                    </div>

                    {products.length === 0
                        ? <div className="h2 text-center my-5">Nothing found...</div>
                        : <ProductsList products={products} />}

                    <Pagination pagination={pagination} />
                </div>
            </div>
        </div>
    );
};

export default ProductsBlock;

