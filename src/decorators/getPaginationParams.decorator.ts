
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const paginatedParams = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let query = request.query;

    let page = query.page || 1;
    let limit = query.limit || 100;

    let firstIndex = (page * limit) - limit;
    let lastIndex = (page * limit);

    let paginatedParams = {firstIndex:firstIndex,lastIndex:lastIndex};


    return paginatedParams;
  },
);
