// Canonical observation module — public surface.
//
// Realizes the growth-observation canonical observation contract for the Terra
// Pay X website. Vendor-neutral, contract-first, interpretation-free. See
// README.md in this directory for the surface model and how to instrument a new
// digital product.

export * from './contract';
export * from './surfaces';
export * from './validate';
export * from './identity';
export * from './attribution';
export * from './adapter';
export { ObservationClient, type ObservationClientDeps, type ObserveContext } from './client';
export { ObservationProvider, useObservation } from './ObservationProvider';
