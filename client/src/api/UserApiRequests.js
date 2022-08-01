const url = 'http://localhost:8080';

/**
 * Sends a POST requests for registration.
 * @param {User info} credentials 
 */
async function UserSignUp( credentials )
{
    const res = await fetch(`${url}/register`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });
    return await res.json();
}

/**
 * Sends a POST request for a login.
 * @param {User info} credentials 
 */
async function UserSignIn( credentials )
{
    const res = await fetch(`${url}/login`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });
    return await res.json();
}

/**
 * Sends a GET request for user current bucket stats.
 * @param {User Token} token 
 * @returns Object which holds user AWS stats
 */
async function GetUserStats(token)
{
    const res = await fetch(`${url}/files/stats`,{
        method: 'GET',
        headers: {token}
    });
    return await res.json();
}

/**
 * Sends a POST request for a file upload.
 * @param {File to upload} file 
 * @param {User Token} token
 */
async function UploadFile( file , token )
{
    const res = await fetch(`${url}/files/upload`, {
        method: 'POST',
        headers: {token},
        body: file
    });
    return await res.json();
}

/**
 * Sends a POST request for an AWS file upload.
 * @param {File to Upload} file 
 * @param {User Token} token 
 * @returns 
 */
async function UploadFileAWS(file,token)
{
    const res = await fetch(`${url}/files/aws_upload`, {
        method: 'POST',
        headers: {token},
        body: file
    });
    return await res.json();
}

/**
 * Sends a DELETE request to clear all user files.
 * @param {User Token} token 
 * @returns Message contains deletion result
 */
async function ClearAllData(token)
{
    const res = await  fetch(`${url}/files/clear`,{
        method: 'DELETE',
        headers: {token}
    });
    return await res.json();
}

/**
 * Sends a GET request to fetch all data items stored in the cloud.
 * @param {User Token} token 
 * @returns User stored data items
 */
async function GetAllData(token)
{
    const res = await fetch(`${url}/files`,{
        method: 'GET',
        headers: {token}
    });
    return await res.json();
}

module.exports = {UserSignUp,UserSignIn,UploadFile,GetUserStats,ClearAllData,GetAllData,UploadFileAWS};