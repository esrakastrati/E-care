/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      email
      relation
      patientID
      patient {
        id
        name
        last
        imageUri
        age
        facts
        hobbies
        health
        createdAt
        updatedAt
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom{
            id
            chatRoomUsers{
              items{
                  user{
                    id
                    name
                    imageUri
                    email
                    relation
                    patientID
                    patient {
                      id
                      name
                      imageUri
                      age
                      createdAt
                      updatedAt
                    }
                  
                }
              }
            }
            lastMessage {
              id
              createdAt
              content
              updatedAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
