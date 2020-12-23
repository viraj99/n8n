import { INodeProperties } from 'n8n-workflow';

export const mailFolderOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['mailFolder'],
			},
		},
		options: [
            {
				name: 'Create',
				value: 'create',
				description: 'Creates a new mail folder in the root folder of the user\'s mailbox.',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Deletes a folder.'
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Gets a single folder details.',
            },
            {
				name: 'List',
				value: 'list',
				description: 'Lists all folders under the root folder of the signed-in user.',
            },
            {
                name: 'List Children',
                value: 'listChildren',
                description: 'Lists all child folders under the folder.'
            },
            {
                name: 'List Messages',
                value: 'listMessages',
                description: 'Lists all the messages in the folder.'
            },
		],
		default: 'list',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const mailFolderFields = [
    {
        displayName: 'Folder ID',
        name: 'folderId',
        description: 'Folder ID',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
			show: {
                resource: ['mailFolder'],
				operation: [
                    'delete',
                    'get',
                    'listChildren',
                    'listMessages',
                    'update',
                ],
			},
		},
    },
    // mailFolder:list, listChildren, listMessages
    {
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
                resource: ['mailFolder'],
				operation: [
                    'list',
                    'listChildren',
                    'listMessages',
                ],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
                resource: ['mailFolder'],
				operation: [
                    'list',
                    'listChildren',
                    'listMessages',
                ],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return.',
    },
    // mailFolder:create
    {
        displayName: 'Type',
        name: 'folderType',
        description: 'Folder Type',
        type: 'options',
        options: [
            { name: 'Folder', value: 'folder' },
            { name: 'Search Folder', value: 'searchFolder' },
        ],
        displayOptions: {
            show: {
                resource: ['mailFolder'],
                operation: ['create']
            }
        },
        default: 'folder',
    },
    {
        displayName: 'Display Name',
        name: 'displayName',
        description: 'Name of the folder.',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['mailFolder'],
                operation: ['create']
            }
        }
    },
    {
        displayName: 'Include Nested Folders',
        name: 'includeNestedFolders',
        description: 'Include child folders in the search.',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                resource: ['mailFolder'],
                operation: ['create'],
                folderType: ['searchFolder'],
            }
        }
    },
    {
        displayName: 'Source Folder IDs',
        name: 'sourceFolderIds',
        description: 'The mailbox folders that should be mined.',
        type: 'string',
        typeOptions: {
            multipleValues: true,
        },
        default: [],
        displayOptions: {
            show: {
                resource: ['mailFolder'],
                operation: ['create'],
                folderType: ['searchFolder'],
            }
        }
    },
    {
        displayName: 'Filter Query',
        name: 'filterQuery',
        description: 'The OData query to filter the messages.',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                resource: ['mailFolder'],
                operation: ['create'],
                folderType: ['searchFolder'],
            }
        },
    },
    {
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
                resource: ['mailFolder'],
				operation: [
                    'get',
                    'list',
                    'listChildren',
                    'listMessages',
                ],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Fields the response will contain. Multiple can be added separated by ,.',
            },
            {
                displayName: 'Filter',
                name: 'filter',
                type: 'string',
                default: '',
                description: 'Microsoft Graph API OData $filter query.'
            }
		],
    },
    
    // mailFolder:update
    {
        displayName: 'Fields',
        name: 'fields',
        description: 'Fields to update.',
        type: 'collection',
        default: {},
        displayOptions: {
            show: {
                resource: ['mailFolder'],
                operation: ['update']
            },
        },
        options: [
            {
                displayName: 'Display Name',
                name: 'displayName',
                description: 'Name of the folder.',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Include Nested Folders',
                name: 'includeNestedFolders',
                description: 'Include child folders in the search. Only for search folders.',
                type: 'boolean',
                default: false,
            },
            {
                displayName: 'Source Folder IDs',
                name: 'sourceFolderIds',
                description: 'The mailbox folders that should be mined. Only for search folders.',
                type: 'string',
                typeOptions: {
                    multipleValues: true,
                },
                default: [],
            },
            {
                displayName: 'Filter Query',
                name: 'filterQuery',
                description: 'The OData query to filter the messages. Only for search folders.',
                type: 'string',
                default: '',
            },
        ],
    },
    
] as INodeProperties[];