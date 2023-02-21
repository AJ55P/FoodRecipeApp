import React from 'react';
function Pagination(){
    return (
        <nav aria-label="pagination" className="mt-10 flex flex-wrap justify-center">
            <ul className="flex flex-row justify-around">
                <li className="border border-black mx-1 py-1 px-4 rounded-sm">
                    <a>
                        <span aria-hidden="true">«</span>
                        <span className="hidden">previous set of pages</span>
                    </a>
                </li>
                <li className="border border-black mx-1 py-1 px-4 rounded-sm"><a><span className="hidden">page</span>1</a></li>
                <li className="border border-black mx-1 py-1 px-4 rounded-sm"><a aria-current="page"><span className="hidden">page</span>2</a></li>
                <li className="border border-black mx-1 py-1 px-4 rounded-sm"><a><span>3</span></a></li>
                <li className="border border-black mx-1 py-1 px-4 rounded-sm">
                    <a>
                        <span aria-hidden="true">»</span>
                        <span className="hidden">next set of pages</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Pagination;