import React from 'react'
import { ApiProgressStatus } from '../../service/ApiProgressStatus'

/**
 * Component which displays some component depending on the loading state.
 * @param {*} loading Boolean, indicates the loading state of the request.
 * @param {*} loader Component shown while request is pending.
 * @param {*} render Component that must be shown when the request finished.
 */
export const ApiProgressWrapper = ({ loading, loader, render }) => {
  return loading === ApiProgressStatus.PENDING ? (
    <>{loader}</>
  ) : loading === ApiProgressStatus.READY ? (
    <>{render}</>
  ) : loading === ApiProgressStatus.FAILURE ? (
    <>Error</>
  ) : (
    <></>
  )
}
