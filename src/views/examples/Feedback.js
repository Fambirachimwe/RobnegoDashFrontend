/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,

    Table,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Badge
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useQuery } from "@tanstack/react-query";
import { getFeedback } from "api.js";

const Feedback = () => {
    const [copiedText, setCopiedText] = useState();

    const feedback = useQuery({ queryKey: ['feedbacks'], queryFn: getFeedback });

    // console.log(feedback.data)



    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Customer Feedback </h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Feedback</th>
                                        <th scope="col">Resolved</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        feedback.data ?
                                            (
                                                feedback.data.map(res => (
                                                    <tr>
                                                        <td>{res.date}</td>
                                                        <td>{res._id}</td>
                                                        <td>{res.feedback}</td>

                                                        <td>{res.resolved ? (
                                                            <Badge color="" className="badge-dot">
                                                                <i className="bg-success" />
                                                                                completed
                                                            </Badge>
                                                        ) : (
                                                            <Badge color="" className="badge-dot mr-4">
                                                                <i className="bg-warning" />
                                                                                pending
                                                            </Badge>
                                                        )}</td>
                                                    </tr>
                                                ))
                                            )
                                            :
                                            (null)
                                    }


                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination
                                        className="pagination justify-content-end mb-0"
                                        listClassName="justify-content-end mb-0"
                                    >
                                        <PaginationItem className="disabled">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                tabIndex="-1"
                                            >
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">Next</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </CardFooter>

                        </Card>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default Feedback;
