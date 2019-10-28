'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello, egg';
  }
  async test() {
    const { app } = this;
    const res = await app.mysql.select('order_detail');
    console.log(res);
    return res;
    // ctx.body = `${res[0].id}`;
  }
}

module.exports = HomeController;
