import * as R from 'ramda'

const eqFilter = (prop) => (fltr, obj) => {
  if (!fltr[prop]) {
    return true
  }
  return fltr[prop] === obj[prop]
}

const filter = (fn, f, photo) => fn(f, photo)
const curriedFilter = R.curry(filter)

const failedFilter = curriedFilter(eqFilter('failed'))

/**
 * Filter function for photos.
 * It uses Ramda's allPass to create a function which accepts the filterable object or list.
 *
 * It will be used by the photolist filter function like this:
 * ```
 *  const allFilters = photoFilter({ title: 'r', failed: false})
 *  return allFilters([array of items to filter])
 * ```
 * @param {*} filterObject The filter object which is used by the filter functions.
 * @returns A filter function for filtering an array.
 */
export const photoFilter = (filterObject) => {
  return R.allPass([failedFilter(filterObject)])
}
