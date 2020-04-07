/**
 * @param {ServerRequest} request The incoming webhook request
 * @param {Object.<string, any>} settings Custom settings
 * @return void
 */

const getUrlWithParams = (url: string, params: any) => {
  if (url.includes('?')) url += '?';
  url += Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
  return url;
};

// deep copy a message
const copy = (message: any) => {
  return JSON.parse(JSON.stringify(message));
};


async function onRequest(request, settings) {
    // get request body, header, and query string parameter
    const requestBody = request.json()
    const requestHeader = request.headers.get("X-Signature")
    const requestParam = request.url.searchParams.get("timestamp")

    // Emit messages of various types
    Segment.identify({
        userId: "1234",
        traits: {
            traitName: "Example Trait"
        }
    })

    Segment.track({
        event: "Event Name",
        userId: "1234",
        properties: {
            propertyName: "Example Property"
        }
    })

    Segment.group({
        userId: "1234",
        groupId: "1234",
        traits: {
            traitName: "Example Trait"
        }
    })

    Segment.set({
        collection: "collection_name_plural",
        id: "object_id_string",
        properties: {
            propertyName: "Example Property"
        }
    })
}
