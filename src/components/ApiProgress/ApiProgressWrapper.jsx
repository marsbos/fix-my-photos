import React from 'react'
import { ApiProgressStatus } from '../../service/ApiProgressStatus'

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
