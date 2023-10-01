import express from "express";
import {
    AddBookController,
    DeleteBookController,
    DisableBookController,
    GetBookByIdController,
    ListBookController,
    ListInactiveBookController,
    LoanBookController,
    UpdateBookController,
    FilterBooksController
} from "./dependencias";

export const bookRoutes = express.Router();

bookRoutes.post('/addbook', AddBookController.run.bind(AddBookController));
bookRoutes.delete('/deletebook/:uuid', DeleteBookController.run.bind(DeleteBookController));
bookRoutes.put('/disablebook/:uuid', DisableBookController.run.bind(DisableBookController));
bookRoutes.get('/getbook/:uuid', GetBookByIdController.run.bind(GetBookByIdController));
bookRoutes.get('/listbooks', ListBookController.run.bind(ListBookController));
bookRoutes.get('/listinactive-books', ListInactiveBookController.run.bind(ListInactiveBookController));
bookRoutes.post('/loanbook', LoanBookController.run.bind(LoanBookController));
bookRoutes.put('/updatebook/:uuid', UpdateBookController.run.bind(UpdateBookController));
bookRoutes.get('/filtro/:uuid/:title/:author/:uniteCode', FilterBooksController.run.bind(FilterBooksController));
