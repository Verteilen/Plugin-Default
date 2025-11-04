import { TemplateGroup_Database, TemplateGroup_Project } from 'verteilen-core'
import { GetDefaultProject_Database } from './database/Default'
import { GetDefaultProjectTemplate } from './project/Default'
import { GetDefaultProjectTemplate_Short } from './project/Default_Short'

export const BuildIn_ProjectTempGroup:Array<TemplateGroup_Project> = [
    { group: "Default", title: 'Testing', value: 0, filename: "testing", template: GetDefaultProjectTemplate },
    { group: "Default", title: 'Short Testing', value: 1, filename: "short_testing", template: GetDefaultProjectTemplate_Short },
]

export const BuildIn_DatabaseTempGroup:Array<TemplateGroup_Database> = [
    { group: "Default", title: 'Default Database', value: 0, filename: "database", template: GetDefaultProject_Database },
]