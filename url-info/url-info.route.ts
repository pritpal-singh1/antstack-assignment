import { Router } from "express";
import urlInfoService from "./url-info.service";
import * as dns from "dns";
const router = Router();


router.get("/getMetatagContent/", async (req, res, next) => {
  try {
    const url = req.query.url as string;
    const metatag = req.query.metatag as string;
    const metaTagResponse = await urlInfoService.getMetaTagContent(url,metatag);
  
    res.status(200).json({response:metaTagResponse});
  } catch (error) {
    next(error);
  }
});
router.get("/getDnsText/", async (req, res, next) => {
  try {
    const url = req.query.url as string;

    let dnsTxtRecord; 
    dns.resolveTxt(url, (err, addresses) => {
      dnsTxtRecord= JSON.stringify(addresses);
      if(dnsTxtRecord)
      res.status(200).json({response:dnsTxtRecord});
      else
      res.status(200).json({
        response:"Dns Txt Not Present"
      });
    });
   
  } catch (error) {
    next(error);
  }
});
export default router;
