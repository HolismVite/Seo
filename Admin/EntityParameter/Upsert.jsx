import { useState, useEffect } from 'react'
import { Form, Progress, app, get } from '@Form'
import Inputs from '../ParameterObject/Inputs'

const UpsertEntityParameter = () => {

    const { entityType, entityGuid } = app.parseQuery()
    const [entity, setEntity] = useState(null)
    const [progress, setProgress] = useState(true)

    useEffect(() => {
        if (entityType && entityGuid) {
            setProgress(true)
            get(`/entityParameter/getRecord?entityType=${entityType}&entityGuid=${entityGuid}`)
                .then(data => {
                    app.emit(app.editRequested, { entity: data })
                    setEntity(data)
                }, error => {
                    setProgress(false)
                    app.error(error)
                })
        }
    }, [])

    useEffect(() => {
        if (entity) {
            setProgress(false)
        }
    }, [entity])

    return progress ? <Progress /> : <Form
        entityType='EntityParameter'
        entity={entity}
        inputs={Inputs}
    />
}

export default UpsertEntityParameter