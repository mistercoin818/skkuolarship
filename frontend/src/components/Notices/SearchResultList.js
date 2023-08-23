import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import transformDepart from '../../utils/transformDepart';

const SearchResultList = ({ data, onNoticeClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>담당부서</TableCell>
            <TableCell>공고명</TableCell>
            <TableCell>마감일</TableCell>
            <TableCell>조회수</TableCell>
            <TableCell>스크랩</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow 
              key={row.id}
              onClick={() => onNoticeClick(row)}
              >
              <TableCell>{transformDepart(row.department)}</TableCell>
              <TableCell>
                {row.title}
                <div>
                  {row.keywords &&
                    row.keywords.map((keyword, index) => (
                      <Chip
                        key={index}
                        sx={{ m: '8px 10px 0px 0px', p: '5px' }}
                        label={`#${keyword}`}
                      />
                    ))}
                </div>
              </TableCell>
              <TableCell>
                {row.applyEndAt}
                <br />
                {row.daysLeft !== undefined ? (
                  row.daysLeft >= 0 ? (
                    <Chip
                      label={row.daysLeft === 0 ? 'D-day' : `D-${row.daysLeft}`}
                      style={{
                        backgroundColor: row.daysLeft === 0 ? '#FF6D60' : '#609966',
                        color: 'white',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                      }}
                    />
                  ) : (
                    <Chip
                      label="모집 완료"
                      style={{ backgroundColor: 'darkgray', color: 'white', borderRadius: '10px', fontWeight: 'bold', }}
                    />
                  )
                ) : null}
              </TableCell>
              <TableCell>{row.viewCount}</TableCell>
              <TableCell>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResultList;