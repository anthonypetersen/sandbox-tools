import { Octokit } from "https://cdn.skypack.dev/octokit";


export const octokit_driver = async () => {  
    
    const options = document.getElementById('modules');
    const selected = options.value;

    console.log(selected);

    const octokit = new Octokit({ });
    let response = await octokit.request("GET https://api.github.com/repos/episphere/questionnaire/commits?path=" + selected + "&sha=main&per_page=1");

    if(response.status === 200 && response.data) {
        console.log("good response");
        console.log("Remaining: " + response.headers['x-ratelimit-remaining']);
        
    }
}



document.getElementById('octokit-driver').addEventListener('click', () => {
    console.log("running octokit driver");
    octokit_driver();
})