import { useState, useEffect } from 'react'
import { PageForm, Progress, app, get, useMessage } from '@Form'
import Inputs from '../ParameterObject/Inputs'

const UpsertEntityParameter = () => {

    const { entityType, entityGuid } = app.parseQuery()
    const { error } = useMessage()

    const loader = ({
        setEntity,
        setProgress,
    }) => {
        if (entityType && entityGuid) {
            setProgress(true)
            get(`/entityParameter/getRecord?entityType=${app.camelize(entityType)}&entityGuid=${entityGuid}`)
                .then(data => {
                    setProgress(false)
                    setEntity(data)
                }, e => {
                    setProgress(false)
                    error(e)
                })
        }
    }

    return <PageForm
        entityType='EntityParameter'
        inputs={Inputs}
        loader={loader}
    />
}

export default UpsertEntityParameter