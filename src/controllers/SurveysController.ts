import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import * as yup from "yup";

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const schema = yup.object().shape({

        });

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description,
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        const allSurveys = await surveysRepository.find();

        return response.json(allSurveys);
    }
}

export { SurveysController };

