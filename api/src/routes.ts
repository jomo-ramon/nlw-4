import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveysController';
import { SendMainController } from './controllers/SendMailController';


const router = Router();

const userController = new UserController();

const surveyController = new SurveyController();


router.post("/users", userController.create);

router.post("/surveys", surveyController.create);

router.get("/surveys", surveyController.show);

router.post("/sendMail", SendMainController.);




export { router };