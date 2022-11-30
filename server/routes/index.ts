import { charactersRouter } from './characters'
import { initTRPC } from '@trpc/server'

const trpc = initTRPC.create()

export const appRouter = trpc.mergeRouters(charactersRouter)

export type AppRouter = typeof appRouter
export const caller = appRouter.createCaller({})