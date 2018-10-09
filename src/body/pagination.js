import React, { Component } from 'react';
import {Pagination,Pager} from 'react-bootstrap';
import '../css/pagination.css';

class PaginationComp extends Component {
  render() {
    return (
      <div>
          <div className="first-pagination-wrap">
                <h4 className="text-left mt-0">Pagination Structure</h4>
                <Pagination>
                    <Pagination.First className="prev-btn"/>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next className="next-btn"/>
                    <Pagination.Last />
                </Pagination>
                <Pager>
                    <Pager.Item previous href="#">
                        &larr; Previous Page
                    </Pager.Item>
                    <Pager.Item next href="#">
                        Next Page &rarr;
                    </Pager.Item>
                </Pager>
               
          </div>
      </div>
    )
  }
}

export default PaginationComp;

