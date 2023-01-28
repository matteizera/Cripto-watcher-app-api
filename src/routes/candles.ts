import { Router } from "express";
import CandleController from "../controllers/CandleController";


export const CandleRouter = Router()
const candleCtrl = new CandleController()

CandleRouter.get('/:quantity', async (req,res)=>{
    const quantity = parseInt(req.params.quantity)
    const candles = await candleCtrl.findLasCandles(quantity)
    return res.json(candles)
})