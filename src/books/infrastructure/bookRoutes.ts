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
} from "./dependencias";

export const bookRoutes = express.Router();

bookRoutes.post('/add-book', AddBookController.run.bind(AddBookController));
bookRoutes.delete('/delete-book/:id', DeleteBookController.run.bind(DeleteBookController));
bookRoutes.put('/disable-book/:id', DisableBookController.run.bind(DisableBookController));
bookRoutes.get('/get-book/:id', GetBookByIdController.run.bind(GetBookByIdController));
bookRoutes.get('/list-books', ListBookController.run.bind(ListBookController));
bookRoutes.get('/list-inactive-books', ListInactiveBookController.run.bind(ListInactiveBookController));
bookRoutes.post('/loan-book', LoanBookController.run.bind(LoanBookController));
bookRoutes.put('/update-book/:id', UpdateBookController.run.bind(UpdateBookController));