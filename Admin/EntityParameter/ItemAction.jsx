import FindInPageIcon from '@mui/icons-material/FindInPage';
import { ItemAction } from '@List'

const EntitySeo = ({
    entityType,
    entityGuid,
    ...rest
}) => {
    return <ItemAction
        {...rest}
        title='Manage SEO'
        icon={FindInPageIcon}
        goTo={`/entityParameter?entityType=${entityType}&entityGuid=${entityGuid}`}
        superAdmin
    />
}

export default EntitySeo