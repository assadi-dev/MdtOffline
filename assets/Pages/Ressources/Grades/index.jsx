import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditPencilIcon, TrashIcon } from "../../../components/SVG";
import { get_allGrades } from "../../../redux/actions/Grades.action";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../Ressources.styled";
import { GradeBody, GradeWrapper } from "./Grade.styled";

const Grades = () => {
  const GradesSelectors = useSelector((state) => state.GradesReducer);
  const { collections, filtered } = GradesSelectors;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_allGrades());
  }, []);

  return (
    <>
      <GradeWrapper>
        <HeaderRowAction>
          {" "}
          <div></div>
          <Button className="addBtn">Ajouter</Button>{" "}
        </HeaderRowAction>

        <GradeBody>
          <Table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Categorie</th>
                <th className="td-center">Niveau</th>
                <th className="td-center">Effectifs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {collections.length > 0 &&
                collections.map((grade) => (
                  <tr key={grade.id}>
                    <td>{grade.nom}</td>
                    <td>{grade.categorie}</td>
                    <td className="td-center">{grade.rang}</td>
                    <td className="td-center">
                      {grade.agents ? grade.agents.length : 0}
                    </td>

                    <td>
                      <TableAction>
                        <OutlineBtnAction className="edit">
                          <EditPencilIcon />
                        </OutlineBtnAction>
                        <OutlineBtnAction className="delete">
                          <TrashIcon />
                        </OutlineBtnAction>
                      </TableAction>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </GradeBody>
      </GradeWrapper>
    </>
  );
};

export default Grades;
