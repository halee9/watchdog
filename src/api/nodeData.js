const tenants = [
    'master',
    'demo-tenant',
    'cluster-infra',
    'demo-tenant2',
    'shared'
];

const regionalCluster = [
    {
        name: 'cluster-master',
        tenant: 'master'
    },
    {
        name: 'cluster 1-cluster-infra',
        tenant: 'cluster-infra'
    },
    {
        name: 'cluster 2-demo-tenant',
        tenant: 'demo-tenant'
    },
    {
        name: 'cluster 3-demo-tenant2',
        tenant: 'demo-tenant2'
    },
    {
        name: 'cluster 4-shared',
        tenant: 'shared'
    }
];


export const nodes = [
    {
        name: 'ip-172-20-202-67.ec2.internal1',
        tenant: 'master',
        regionalCluster: 'cluster-master',
        cores: 1,
        RAM: 6539402240,
        status: 'False',
        disk: 12,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '2 monthes',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal2',
        tenant: 'master',
        regionalCluster: 'cluster-master',
        cores: 4,
        RAM: 16539402240,
        status: 'True',
        disk: 22,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal3',
        tenant: 'master',
        regionalCluster: 'cluster-master',
        cores: 1,
        RAM: 165394240,
        status: 'False',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal1',
        tenant: 'cluster-infra',
        regionalCluster: 'cluster 1-cluster-infra',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal2',
        tenant: 'cluster-infra',
        regionalCluster: 'cluster 1-cluster-infra',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal3',
        tenant: 'cluster-infra',
        regionalCluster: 'cluster 1-cluster-infra',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-152-78.ec2.internal1',
        tenant: 'demo-tenant',
        regionalCluster: 'cluster 2-demo-tenant',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-152-78.ec2.internal2',
        tenant: 'demo-tenant',
        regionalCluster: 'cluster 2-demo-tenant',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-152-78.ec2.internal3',
        tenant: 'demo-tenant',
        regionalCluster: 'cluster 2-demo-tenant',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-199-201.ec2.internal1',
        tenant: 'demo-tenant2',
        regionalCluster: 'cluster 3-demo-tenant2',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-199-201.ec2.internal2',
        tenant: 'demo-tenant2',
        regionalCluster: 'cluster 3-demo-tenant2',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-199-201.ec2.internal3',
        tenant: 'demo-tenant2',
        regionalCluster: 'cluster 3-demo-tenant2',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal1',
        tenant: 'shared',
        regionalCluster: 'cluster 4-shared',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal2',
        tenant: 'shared',
        regionalCluster: 'cluster 4-shared',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
    {
        name: 'ip-172-20-202-67.ec2.internal3',
        tenant: 'shared',
        regionalCluster: 'cluster 4-shared',
        cores: 1,
        RAM: 165394240,
        status: 'True',
        disk: 92,
        pods: [
            {
                name: 'jjjjj',
                status: 'Running',
                restarts: 0,
                age: '1 month',
                cores: 222,
                RAM: 66.78
            }
        ]
    },
];
