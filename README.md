# Partner Integration Function Library

This repository contains partner integration functions. If you're building out a new partner integration endpoint, or a custom piece of code that you want to run a serverless functions use this repo as the set of examples.

## Adding a new partner
1. Create a source function. Start with the template example and code away.
2. Add the function to this repo by copying the template run `$ cp -a template <name-of-new-source>` and paste your code into your editor


- [4stay](./functions-library/sources/4stay) - Subscribes to 4stay webhook leads
- [Audit Forwarding](./functions-library/sources/audit-forwarding) - Enhances Segment Audit Forwarding
    - [Protocols: Anomaly Detection](https://segment.com/docs/protocols/anomaly_detection/)
- [Cirtru](./functions-library/sources/cirtru) - Subscribes to Cirtru webhook leads
- [Coliving](./functions-library/sources/coliving) - Subscribes to Co-living webhook leads
- [Domu](./functions-library/sources/domu) - Subscribes to Domu webhook leads
- [Room8](./functions-library/sources/room8) - Subscribes to Room8 webhook leads
- [Roomster](./functions-library/sources/roomster) - Subscribes to Roomster webhook leads
- [Spareroom](./functions-library/sources/spareroom) - Subscribes to Spareroom webhook leads
- [template](./functions-library/sources/template) - Just a template. 

    ```bash
    $ cp -a template <name-of-new-source>
    ```


## Destinations

- [Requestbin](./destinations/requestbin) - Sends events to RequestBin for introspection
- [Slack](./destinations/slack) - Adds a Gravatar icon to events with an email and sends messages to Slack

## Development

Run tests with:

```
$ yarn && yarn test
```
