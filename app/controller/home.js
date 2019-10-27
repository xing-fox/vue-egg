'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello, egg';
  }
  async test() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = 'hello, test';
  }
}

module.exports = HomeController;
 