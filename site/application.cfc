<cfcomponent>
    <cfset THIS.Name = "simple-cf-app" />
    <cfset THIS.ApplicationTimeout = CreateTimeSpan( 0, 0, 1, 0 ) />
    <cfset THIS.SessionManagement = true />
    <cfset THIS.SetClientCookies = true />
    <cfsetting requesttimeout="20" showdebugoutput="true" />
</cfcomponent>
