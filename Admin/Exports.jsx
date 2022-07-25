import SearchIcon from '@mui/icons-material/Search';
import EntityParameters from './EntityParameter/List'
import EntitySeo from './EntityParameter/EntityAction'
import QueryParameters from './QueryParameter/List'
import Snippets from './Snippet/List'
import UpsertEntityParameter from './EntityParameter/Upsert'

const SeoRoutes = [
    {
        path: "/entityParameters",
        component: EntityParameters
    },
    {
        path: "/entityParameter",
        component: UpsertEntityParameter
    },
    {
        path: "/queryParameters",
        component: QueryParameters
    },
    {
        path: "/snippets",
        component: Snippets
    }
]

const SeoMenu = [
    {
        title: "SEO",
        icon: SearchIcon,
        children: [
            {
                title: "Paths",
                url: "/seoPaths"
            }
        ]
    }
]

export { EntitySeo }
export { SeoMenu }
export { SeoRoutes }