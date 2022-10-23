import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import { get_allChefAccusations } from "../../../../redux/actions/ChefAccusation.action";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../../CommandStaffSupervisor.styled";
import {
  ChefAccusationBody,
  ChefAccusationWrapper,
} from "./ChefAccusation.styled";

const ChefAccusation = () => {
  const chefAccusationSelectors = useSelector(
    (state) => state.ChefAccusationReducer
  );
  const { collections, filtered } = chefAccusationSelectors;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_allChefAccusations());
  }, []);

  return (
    <>
      <ChefAccusationWrapper>
        <HeaderRowAction>
          {" "}
          <div></div>
          <Button className="addBtn">Ajouter</Button>{" "}
        </HeaderRowAction>
        <ChefAccusationBody>
          <Table>
            <thead>
              <tr>
                <th>Infractions</th>
                <th>Categorie</th>
                <th className="td-center">Amendes</th>
                <th className="td-center">Peines</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {collections.length > 0 &&
                collections.map((chef) => (
                  <tr key={chef.id}>
                    <td>{chef.infraction}</td>
                    <td>{chef.categorie}</td>
                    <td className="td-center">{chef.amendes}</td>
                    <td className="td-center">{chef.peines}</td>

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
        </ChefAccusationBody>
      </ChefAccusationWrapper>
    </>
  );
};

export default ChefAccusation;
