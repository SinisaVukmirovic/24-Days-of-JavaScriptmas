function domainType(domains) {
    const typesOfDomain = {
        org: 'organization',
        com: 'commercial',
        net: 'network',
        info: 'information'
    };
    
    for (let i = 0; i < domains.length; i++) {
        for (let [key, value] of Object.entries(typesOfDomain)) {
            if (domains[i].includes(`.${key}`)) {
                domains[i] = `${value}`;
            } else if  (domains[i].includes(`.${key}`)) {
                domains[i] = `${value}`;
            } else if (domains[i].includes(`.${key}`)) {
                domains[i] = `${value}`;
            } else if (domains[i].includes(`.${key}`)) {
                domains[i] = `${value}`;
            }
        }
    }
    return domains;
}

console.log(domainType(['e.wiki.org', 'codefight.com', 'happy.net', 'code.info']));