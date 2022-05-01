# API's:

**1.http://localhost:4040/api/auth/registration:**
This api create user with 4 parameters. 1. full_name 2. username 3. email 4. password
It's response :
'success'
if user registration successfull otherwise response an object like:
{
message: 'user already exist with this email account'
}'
if any error occurred.

**2.http://localhost:4040/api/auth/login:**
This api create user with 2 parameters. 1. email 2. password
It's response an object like:
{
\_id: user.\_id,
full_name:user.full_name,
username:user.username,
email:user.email,
role:user.role,
created_at:user.created_at,
updated_at:user.updated_at,
}
if user login successfull otherwise response an object like:
{
message: "Email or password incorrect"
}'
if any error occurred.
