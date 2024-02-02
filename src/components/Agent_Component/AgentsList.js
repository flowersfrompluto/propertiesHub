import React from 'react'
import AgentTableList from '../Dashboard_Utilities/AgentTableList'
import DashboardHeader from '../Dashboard_Utilities/DashboardHeader'


const AgentsList = () => {
  return (
    <div>
      <DashboardHeader
        header="Agents"
        btn="+ Add an Agent"
        link={true}
        path="/admin-agent/create-property-admin"
      />
      <AgentTableList/>
    </div>
  )
}

export default AgentsList
