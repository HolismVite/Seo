import EntityParameters from './EntityParameter/List'
import EntitySeo from './EntityParameter/EntityAction'
import UpsertEntityParameter from './EntityParameter/Upsert'
import QueryParameters from './QueryParameter/List'
import Snippets from './Snippet/List'

const SeoRoutes = [
    {
        "path": "/entityParameters",
        "component": EntityParameters
    },
    {
        "path": "/entityParameter",
        "component": UpsertEntityParameter
    },
    {
        "path": "/queryParameters",
        "component": QueryParameters
    },
    {
        "path": "/snippets",
        "component": Snippets
    }
]

export { SeoRoutes }
export { EntitySeo }