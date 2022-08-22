import { error } from '@sveltejs/kit'
import { page } from '$app/stores'

export async function load({ fetch, params }) {
  const res = await fetch(
    'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-58FB851E-33EB-4078-BE5C-9876EB8876C7'
  )
  const data = await res.json()
  if (data.success) {
    return {
      county: params.county,
      data: data.records.locations[0],
    }
  }
}
