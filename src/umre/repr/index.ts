/**
 * UMRE stage 1 — unified music representation. Public API; adapters are imported from ./adapters/* directly so that a
 * caller who only needs the model does not pull in the editor or the counterpoint module.
 */
export * from './rational'
export * from './pitch'
export * from './interval'
export * from './tonal'
export * from './time'
export * from './score'
export * from './harmony'
export * from './structure'
export * from './validate'
export * from './schema'
export * from './texture'
