import to from '../../core/utils/to';

const route = (router: any) => {
  router.get('/', (req: any, res: any) => to('home', 'index', req, res));

  return router;
}

export default route;