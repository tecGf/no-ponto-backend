import { Request, Response } from "express";
import { db } from "../connection/db";

class PermissionsController{

  public async permissions(req:Request, res:Response) {
    db.connect((error, conn) => {
      if (error) { return res.status(500).send({ error: error }) }
      conn.query(
        'SELECT * FROM PERMISSIONS;',
        (error, result) => {
          if (error) { return res.status(500).send({ error: error }) }
          return res.status(200).send({ response: result.rows })
        }
      )
    })
  }
}

export const permissionCtrl = new PermissionsController();