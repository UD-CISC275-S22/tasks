from bs4 import BeautifulSoup
import pandas as pd
import requests


PATH = ''

headers = ['Course Code', 'Course Name', 'Credits', 'Description', 'Prerequisites']

urls=[]



for i in range(1, 48):
    urls.append(f'https://catalog.udel.edu/content.php?catoid=87&catoid=87&navoid=26947&filter[27]=-1&filter[29]=&filter[keyword]=&filter[32]=1&filter[cpage]={i}&filter[item_type]=3&filter[only_active]=1&filter[3]=1&expand=1&print#acalog_template_course_filter')


def retrieve_html_content(url: str):
    response = requests.get(url)
    if response.status_code == 200:
        html_content = response.content
    else:
        print("Failed")
        exit()
    return html_content


def instantiate_soup(html_content) -> list:
    return BeautifulSoup(html_content, 'html.parser')


def scrape_code_and_name(soup) -> list:
    course_code_and_name = soup.find_all('h3')
    course_codes = []
    course_names = []
    for i in range(0, len(course_code_and_name)):
        course_code, course_name = course_code_and_name[i].text.split(" - ")[:2]
        course_codes.append(course_code.replace(" ",""))
        course_names.append(course_name[:-1])
    return course_codes, course_names


def scrape_credits(soup) -> list:
    credits = soup.find_all('strong')
    return [x.find_next_sibling(text=True)[1:] for x in credits if x.text == 'Credit(s):']


def scrape_descriptions(soup) -> list:
    description_list = soup.find_all('strong', text='Credit(s):')
    description_list = [x.find_next('br').find_next('br').find_next_sibling(text=True) for x in description_list]
    for i in range(0, len(description_list)):
        if description_list[i] == ' Y ' or description_list[i] == ' N ':
            description_list[i] = 'Description not available.'
        if description_list[i] == 'Continuation of ':
            description_list[i] = 'Decsription not available.'

    return description_list


def scrape_prereqs(soup) -> list:
    restrictions_list = soup.find_all('strong', text='Multiple Term Enrollment:')
    # restrictions_list = [x.find_next('strong') for x in restrictions_list]
    for i in range(len(restrictions_list)):
        prerequisites = ''
        tags = restrictions_list[i].find_all_next(['a','strong'], limit=5)
        found_prereq = False
        for tag in tags:
            if tag.name == 'strong' and tag.text == 'PREREQ:':
                found_prereq = True
                continue

            if found_prereq and tag.name == 'a':
                prerequisites += tag.text + ', '

        if prerequisites:
            restrictions_list[i] = prerequisites[:-2]
        else:
            restrictions_list[i] = 'No prerequisites.'

        while len(restrictions_list) < 100:
            restrictions_list.append('No prerequisites.')
            
    return restrictions_list


if __name__=='__main__':

    full_course_codes = []
    full_course_names = []
    full_credits = []
    full_descriptions = []
    full_prereqs = []

    index = 1
    for url in urls:
        print(index)
        index+=1
        html_content = retrieve_html_content(url)

        soup = instantiate_soup(html_content=html_content)

        course_codes, course_names = scrape_code_and_name(soup)
        credits = scrape_credits(soup)
        description = scrape_descriptions(soup)
        prereqs = scrape_prereqs(soup)

        for i in range(0, len(course_codes)):
            full_course_codes.append(course_codes[i])
            full_course_names.append(course_names[i])
            full_credits.append(credits[i])
            full_descriptions.append(description[i])
            full_prereqs.append(prereqs[i])



    
    data = {
        'Course Code': full_course_codes,
        'Course Name': full_course_names,
        'Credits': full_credits,
        'Prereqs': full_prereqs,
        'Description': full_descriptions
    }

    df = pd.DataFrame(data=data)

    df.to_csv('/home/nathan/Desktop/Fall 2023/CISC 275/scrapping/data.csv', index=False)


        



    
