# Bungalow Partner Integration Endpoint Segment Functions Library

This repository contains our partner integration functions that are hosted within Bungalow's Segment instance. If you're building out a new partner integration endpoint, or a custom piece of code that you want Segment to run, use this repo as the set of examples.

## Adding a new partner
1. Create a source function within [Segment](https://app.segment.com/bungalow/functions/catalog). Start with the template example and code away.
2. Add the function to this repo by copying the template run `$ cp -a template <name-of-new-source>` and paste your code from Segment




## Docs 
- [Source Functions](https://segment.com/docs/connections/sources/source-functions/#source%20functions)
- [Destination Functions](https://segment.com/docs/connections/destinations/destination-functions/#destination%20functions)
- [Custom Destinations: Functions](https://segment.com/docs/connections/destinations/custom-destinations/#custom%20destinations:%20functions)
- [Building a Subscription Function](https://segment.com/docs/partners/build-functions/) 

## Sources

- [4stay](./functions-library/sources/4stay) - Subscribes to 4stay webhook leads
- [Audit Forwarding](./functions-library/sources/audit-forwarding) - Enhances Segment Audit Forwarding
    - [Protocols: Anomaly Detection](https://segment.com/docs/protocols/anomaly_detection/)
- [cirtru](./functions-library/sources/cirtru) - Subscribes to Cirtru webhook leads
- [coliving](./functions-library/sources/coliving) - Subscribes to Co-living webhook leads
- [domu](./functions-library/sources/domu) - Subscribes to Domu webhook leads
- [room8](./functions-library/sources/room8) - Subscribes to Room8 webhook leads
- [roomster](./functions-library/sources/roomster) - Subscribes to Roomster webhook leads
- [LeanPlum](./functions-library/sources/spareroom) - Subscribes to Spareroom webhook leads
- [template](./functions-library/sources/template) - Just a template `cp -a template <name-of-new-source>`


## Destinations

- [Requestbin](./destinations/requestbin) - Sends events to RequestBin for introspection
- [Slack](./destinations/slack) - Adds a Gravatar icon to events with an email and sends messages to Slack


## Development

Run tests with:

```
yarn && yarn test
```
