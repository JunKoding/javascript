#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
struct Person
{
    int age;
    char name[20];
};
int main()
{
    struct Peroson jun;
    strcpy(jun.name , "jun");
    jun.age = 26;

    printf("이름: %s\n, jun.name");
    printf("나이: %d\n, jun.age");
    

    return 0;
}