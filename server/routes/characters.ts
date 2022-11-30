// @filename: server.ts
import axios from 'axios'
import { z } from 'zod'

import { wrapSuccess, trpc } from '../utils';

export const charactersRouter = trpc.router({
  getChars: trpc.procedure.input(z.object({ page: z.string()})).query(async ({input}) => {
    const charactersResponse = await axios(
      'https://rickandmortyapi.com/api/character',
    {
      params: {page: input.page}
    })
    return wrapSuccess(charactersResponse)
    })
})

export type CharactersRouter = typeof charactersRouter;