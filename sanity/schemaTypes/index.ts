import { type SchemaTypeDefinition } from 'sanity'
import { studentType } from './studentType'
import { courseType } from './courseType'
import { moduleType } from './moduleType'
import { instructorType } from './instructorType'
import { lessonType } from './lessonType'
import { enrollmentType } from './enrollmentType'
import { categoryType } from './categoryType'
import { lessonCompleteType } from './lessonCompleteType'
import { blockContent } from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ 
    studentType,
    courseType,
    lessonType,
    instructorType,
    moduleType,
    enrollmentType,
    categoryType,
    lessonCompleteType,
    blockContent
   ],
}

export * from './studentType'
export * from './courseType'
export * from './moduleType'
export * from './instructorType'
export * from './lessonType'
export * from './enrollmentType'
export * from './categoryType'
export * from './lessonCompleteType'
export * from './blockContent'


