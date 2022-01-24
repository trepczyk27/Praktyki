
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re 
import win32com.client
import numpy as np


ExcelApp = win32com.client.gencache.EnsureDispatch('Excel.Application')


WrkSht = ExcelApp.ActiveSheet

Url_List = WrkSht.Range("A1:C1").Value


section_init = 1


for url in Url_List[0]:
    

    req = Request(url)
    html_page = urlopen(req)
    column_list =[]
    
  
    soup = BeautifulSoup(html_page, 'html.parser')
    

    for link in soup.findAll('a'):
        row_list = []
        row_list.append(link.get('href'))
        column_list.append(row_list)

    StrCell = WrkSht.Cells(2, section_init)
    EndCell = WrkSht.Cells(2 + len(column_list), section_init)    
    ExcelApp.Range(StrCell, EndCell).Value = column_list

    section_init += 1