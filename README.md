# F5 OTP Useremail Mapping
This web service is used in a F5 ILX wrokflow to return an email address for a given user id.

It leverages SQL for the backend, and relies on a stored procedure that accepts a string and returns the following fields:

* UserName
  * Type: String
* EmailAddress
  * Type: String

The following environment variables must exist in order for the API to work.

* PORT - Port for the API to listen on.
* SQLPORT - Port that SQL is listening on.
* SQLSERVER - Hostname or IP of SQL Server.
* SQLUSER - SQL User account. (Cannot be Windows user, local SQL user.)
* SQLPASS - SQL User Password.
* SQLDB - DB Name
* SQLPROC - Stored Procedure name.