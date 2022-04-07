import friendService from "./url-info.service";
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import { DnsTxtResponse, MetaTagResponse } from "./url-info.types";

const getMetaTagContent = async (url:string,metatag:string) => {

    const urlPage = await fetch(url);
    const urlHtml=await urlPage.text();
    const $ = cheerio.load(urlHtml);
    const metaTagContent = $(`meta[property="${metatag}"]`).attr('content');
    if(metaTagContent){
      const response:MetaTagResponse={
        name:url,
        content:metaTagContent
      } as MetaTagResponse;
    return response;
    }return {
      response:"Meta Tag Not Present"
    };
  
} 





export default {
  getMetaTagContent,
};
