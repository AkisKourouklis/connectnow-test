import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { CrudController } from '../CrudController'
import UserModel from '../../models/User'

export class UserController extends CrudController {
  public async create(_req: Request<ParamsDictionary>, _res: Response): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async read(_req: Request<ParamsDictionary>, res: Response): Promise<void> {
    const users = await UserModel.find({})
    res.json({ message: 'GET /user request received', users })
  }

  public async update(_req: Request<ParamsDictionary>, _res: Response): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async delete(_req: Request<ParamsDictionary>, _res: Response): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
