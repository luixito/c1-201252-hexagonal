import { MysqlBookRepository } from "./mysqlBookRepository";
const mysqlbookRepository = new MysqlBookRepository();

import {addBookController} from "./controller/addBookController"
import {AddBookUseCase} from "../application/addBookUseCase";

const addBookUseCase = new AddBookUseCase(mysqlbookRepository);
const AddBookController = new addBookController(addBookUseCase);

import {deleteBookController} from "./controller/deleteBookController"
import {deleteBookUseCase} from "../application/deleteBookUseCase";

const DeleteBookUseCase = new deleteBookUseCase(mysqlbookRepository);
const DeleteBookController = new deleteBookController(DeleteBookUseCase);

import { DisableUserController } from "./controller/disableBookController";
import { disableBookUseCase } from "../application/disableBookUseCase";

const DisableBookUseCase = new disableBookUseCase(mysqlbookRepository);
const DisableBookController = new DisableUserController(DisableBookUseCase);

import { getBookByIdController } from "./controller/getBookByIdController";
import { getBookByIdUseCase } from "../application/getBookByIdUseCase";

const GetBookByIdUseCase = new getBookByIdUseCase(mysqlbookRepository);
const GetBookByIdController = new getBookByIdController(GetBookByIdUseCase);

import { listBookController } from "./controller/listBookController";
import { listBooksUseCase } from "../application/listBooksUseCase";

const ListBookUseCase = new listBooksUseCase(mysqlbookRepository);
const ListBookController = new listBookController(ListBookUseCase);

import { listInactiveBookController } from "./controller/listInactiveBooksController";
import { listInactiveBooksUseCase } from "../application/listInactiveBooksUsecase";

const ListInactiveBookUseCase = new listInactiveBooksUseCase(mysqlbookRepository);
const ListInactiveBookController = new listInactiveBookController(ListInactiveBookUseCase);

import { loanBookController } from "./controller/loanBookController";
import { LoanBookUseCase } from "../application/loanBookUseCase";

const loanBookUseCase = new LoanBookUseCase(mysqlbookRepository);
const LoanBookController = new loanBookController(loanBookUseCase);

import { updateBookController } from "./controller/updateBookController";
import { updateBookUseCase } from "../application/updateBookUseCase";

const UpdateBookUseCase = new updateBookUseCase(mysqlbookRepository);
const UpdateBookController = new updateBookController(UpdateBookUseCase);


export {
    AddBookController,
    DeleteBookController,
    DisableBookController,
    GetBookByIdController,
    ListBookController,
    ListInactiveBookController,
    LoanBookController,
    UpdateBookController,
};
