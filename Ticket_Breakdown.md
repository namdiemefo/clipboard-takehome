# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1: Facilities to create their own custom ids:

    A: Acceptance criteria: 
    - Each facility must provide the same custom id to the same agent on every shift.

    B: Time/Effort estimate: 
    - 30 minutes 

    C: Implementation Details
    - The custom id will follow this format: (facility abbreviation)-(randomId) e:g Nnamdi is an agent who worked at Clipboard health will have facilityAgentId (CBH-0783)

2: Create FacilityAgentTable

    A: Acceptance criteria: 
    - All facility agent ids must be unique

    B: Time/Effort estimate: 
    - 30 minutes 

    C: Implementation Details
    - Create a table with 3 columns (agentId, facilityId, facilityAgentId)
    - Ensure returning agents are not given new facility agent ids

3: Returning the shifts
    A: Acceptance criteria:
    - All records returned must be owned by the same facility that is requesting for the report

    B: Time/Effort estimate: 
    - 30 minutes 

    C: Implementation Details
    - Select records from the shift table where the facilityId is equals to facilityId that needs the return
    - Perform a left join on the FacilityAgentTable where facilityId & AgentId is equals to the facilityId & agentId of the shift table 
    - With the resulting data set , i go on to ensure internal database id is not returned 

